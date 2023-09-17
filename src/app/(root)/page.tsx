import { currentUser } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.actions';
import { User } from '@prisma/client';
import Modal from '@/components/ui/Modal';
import OnboardForm from '@/components/OnboardForm';
import Hero from '@/components/Hero';

export default async function Home() {
  const user = await currentUser();
  let isOnboard = false;
  let userInfo: User | null = null;

  if (user) {
    userInfo = await getUserById(user.id);

    if (userInfo && userInfo?.onboarded) isOnboard = true;
  }

  return (
    <main className="min-h-screen">
      {user && (
        <Modal open={!isOnboard}>
          <OnboardForm
            id={user.id}
            email={user.emailAddresses[0].emailAddress}
          />
        </Modal>
      )}
      <Hero />
    </main>
  );
}
