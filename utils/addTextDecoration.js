export const addTextDecoration = (index, obj, text, color) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = (<b key={index} className={color}>{text}</b>);
    }

    if (obj.italic) {
      modifiedText = (<em key={index} className={color}>{text}</em>);
    }

    if (obj.underline) {
      modifiedText = (<u key={index} className={color}>{text}</u>);
    }

    if (obj.href) {
      modifiedText = (
        <a
          key={index}
          href={obj.href}
          className={color}
          target={obj.openInNewTab ? '__blank' : ''}
          rel="noopener noreferrer"
        >
          {obj.children[0].text}
        </a>
      );
    }
    return modifiedText;
  }
  return null;
};
