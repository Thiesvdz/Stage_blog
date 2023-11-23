import React from 'react';

export const renderSwitch = (index, obj, type, modifiedText) => {
  switch (type) {
    case 'heading-one':
      return <h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
    case 'heading-three':
      return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
    case 'paragraph':
      return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
    case 'heading-four':
      return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
    case 'bulleted-list':
      if (obj.children) {
        return (
          <ul>
            {obj.children.map((item, i) => (
              <li key={i} style={{ fontSize: '12px' }}>
                {item.children.map((itemText, j) => {
                  const [itemTextTwo] = itemText.children[0].children;
                  const [itemTextThree] = itemTextTwo?.children || [];
                  const textToDisplay = itemTextThree ? itemTextThree.text : itemTextTwo.text;
                  return (
                    <React.Fragment key={j}>
                      {textToDisplay}
                    </React.Fragment>
                  );
                })}
              </li>
            ))}
          </ul>
        );
      }
      return null;
    case 'image':
      return (
        <a href={obj.src} target="__blank">
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        </a>
      );
    case 'video':
      return (
        <video
          controls
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        ><track kind="captions" />
        </video>
      );
    default:
      return modifiedText;
  }
};
