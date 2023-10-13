// import React from 'react';

// export const renderContentFragment = (type, index, modifiedText, obj) => {
//   switch (type) {
//     case 'heading-one':
//       return <h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
//     case 'heading-three':
//       return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
//     case 'paragraph':
//       return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
//     case 'heading-four':
//       return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
//     case 'bulleted-list':
//       if (obj.children) {
//         return (
//           <ul>
//             {obj.children.map((item, i) => (
//               <li key={i} style={{ fontSize: '14px' }}>
//                 {item.children.map((itemText, j) => {
//                   const itemTextTwo = itemText.children[0].children[0];
//                   let itemTextThree = '';
//                   if (itemTextTwo.children !== undefined) {
//                     itemTextThree = itemText.children[0].children[0].children[0];
//                   }
//                   return (
//                     <React.Fragment key={j}>
//                       {itemTextThree ? itemTextThree.text : itemTextTwo.text}
//                     </React.Fragment>
//                   );
//                 })}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//       return null;
//     case 'numbered-list':
//       if (obj.children) {
//         return (
//           <ol>
//             {obj.children.map((item, i) => (
//               <li key={i} style={{ fontSize: '14px' }}>
//                 {item.children.map((itemText, j) => {
//                   const itemTextTwo = itemText.children[0].children[0];
//                   let itemTextThree = '';
//                   if (itemTextTwo.children !== undefined) {
//                     itemTextThree = itemText.children[0].children[0].children[0];
//                   }
//                   return (
//                     <React.Fragment key={j}>
//                       {itemTextThree ? itemTextThree.text : itemTextTwo.text}
//                     </React.Fragment>
//                   );
//                 })}
//               </li>
//             ))}
//           </ol>
//         );
//       }
//       return null;
//     case 'image':
//       return (
//         <img
//           key={index}
//           alt={obj.title}
//           height={obj.height}
//           width={obj.width}
//           src={obj.src}
//         />
//       );
//     default:
//       return modifiedText;
//   }
// };
