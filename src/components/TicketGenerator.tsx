"use client";
import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import Image from "next/image";
import { gettingTheImageData } from "@/lib/actions/ticket.actions";

const TicketGenerator = async () => {
  const ticketRef = useRef(null);

  const captureTicketImage = async () => {
    if (!ticketRef.current) return;

    // Capture the screenshot of the ticket content
    htmlToImage
      .toPng(ticketRef.current)
      .then((dataUrl) => {
        // Create an image element to display the captured image
        console.log(dataUrl);
        gettingTheImageData(dataUrl);
      })
      .catch((error) => {
        console.error("Error capturing ticket image: ", error);
      });
  };

  return (
    <div>
      <div ref={ticketRef}>
        {/* Dynamic content for the ticket */}

        <h2 className="text-black">Ticket for </h2>
        <p>Event Date: September 30, 2023</p>
        {/* Add more dynamic content here */}
        <button className="pixel-border px-4" onClick={captureTicketImage}>
          Participate
        </button>
      </div>
    </div>
  );
};

export default TicketGenerator;
// "use client";
// import React from "react";
// import * as htmlToImage from "html-to-image";
// import { gettingTheImageData } from "@/lib/actions/ticket.actions";
// import { createRoot } from "react-dom/client";
// import { useRouter } from "next/navigation";
// const TicketGenerator = () => {
//   const captureTicketImage = async () => {
//     // Create a temporary container for the ticket content
//     const ticketContainer: any = document.getElementById("div");
//     const htmlContent = `<div>
//         <h2 className="text-black">Ticket for</h2>
//         <p>Event Date: September 30, 2023</p>
//         {/* Add more dynamic content here */}
//       </div>`;
//     //ticketContainer.append(htmlContent);
//     // Dynamic content for the ticket

//     const ticketContent = (
//       <div>
//         <h2 className="text-black">Ticket for</h2>
//         <p className="text-black">Event Date: September 30, 2023</p>
//       </div>
//     );
//     const root = createRoot(ticketContainer); // createRoot(container!) if you use TypeScript
//     root.render(ticketContent);

//     // Capture the screenshot of the ticket content
//     htmlToImage
//       .toPng(ticketContainer)
//       .then((dataUrl) => {
//         console.log(dataUrl);
//         gettingTheImageData(dataUrl);
//       })
//       .catch((error) => {
//         console.error("Error capturing ticket image: ", error);
//       });
//   };

//   return (
//     <>
//       <div id="div" className=""></div>
//       <div>
//         {/* Dynamic content for the ticket */}
//         <button className="pixel-border px-4" onClick={captureTicketImage}>
//           Participate
//         </button>
//       </div>
//     </>
//   );
// };

// export default TicketGenerator;
