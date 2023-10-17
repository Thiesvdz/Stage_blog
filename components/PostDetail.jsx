import React from 'react';
import { FormatDate } from '../utils/formatDate';

const PostDetail = ({ post }) => {
  const category = post.categories[0];
  const color = category.slug === 'stage-2' ? 'color_stage_2' : 'color_stage_1';
  const getContentFragment = (index, text, obj, type) => {
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
            href={obj.href} // The URL for the hyperlink
            className={color}
            target={obj.openInNewTab ? '__blank' : ''} // You can customize the target behavior
            rel="noopener noreferrer"
          >
            {obj.children[0].text}
          </a>
        );
      }
    }

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
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="glass_card shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle  ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium ">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 inline mr-2 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{FormatDate(post.postDate)}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
