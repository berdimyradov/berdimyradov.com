// import "./cv.css";
// import { Dancing_Script } from "next/font/google";

// const font = Dancing_Script({
//   subsets: ["latin"],
// });

// export default async function CV({ params }) {
//   return (
//     <div className="cv-container">
//       <div className="paper">
//         <section>
//           <header>
//             <h1 className={font.className}>KERIM BERDIMYRADOV</h1>

//             <p>From TUESDAY, APRIL 27, to THURSDAY, APRIL 29, 1784.</p>
//           </header>

//           <main>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//             ex dicta, laudantium est porro maxime ratione animi? Totam itaque
//             minima sequi! Dolore quibusdam vitae exercitationem facilis
//             inventore, vero recusandae neque.
//           </main>

//           <footer>Footer</footer>
//         </section>
//       </div>
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default async function CV({ params }) {
  redirect("/CV_Berdimyradov-Kerim[FE].pdf");
}
