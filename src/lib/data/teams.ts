// TODO: Remove optional people after data filling is complete
type Members = {
  [key: string]: string[];
};

type Team = {
  title: string;
  slug: string;
  people?: Members;
};

const teams: Team[] = [
  {
    title: 'Graphics and Web',
    slug: 'graphics_and_web',
  },
  {
    title: 'Decoration',
    slug: 'decoration',
  },
  {
    title: 'Marketing',
    slug: 'marketing',
  },
  {
    title: 'Registration',
    slug: 'registration',
  },
  {
    title: 'Photography',
    slug: 'photography',
  },
  {
    title: 'PY-IT',
    slug: 'py-it',
    people: {
      'Faculty Event Head': [
        'Dr. Vivaksha Jariwala',
        'Prof. Apurva Mandalaywala',
        'Prof. Mukesh Patel',
      ],
      'Student Event Head': ['Ayushi Garachh', 'Taashna Jariwala'],
      Volunteer: [
        'Harsh Panchal',
        'Kuldip Khuman',
        'Vedanti Paul',
        'Sujal Ghadiya',
        'Hasti Gondaliya',
        'Malav Radia',
      ],
    },
  },
  {
    title: 'IT Quiz',
    slug: 'it_quiz',
  },
  {
    title: 'Rise to Crescendo',
    slug: 'rise_to_crescendo',
  },
  {
    title: 'Logo Hunt',
    slug: 'logo_hunt',
  },
  {
    title: 'Bug Buzz',
    slug: 'bug_buzz',
  },
  {
    title: 'Codathon',
    slug: 'codathon',
  },
  {
    title: 'Mindspark',
    slug: 'mindspark',
  },
];

export default teams;
