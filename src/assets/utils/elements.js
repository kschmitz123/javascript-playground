export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  const children {children, ...other} = props;
  Object.assign(element,other);

  if (children) {
    element.append(...children);
  }
  return element;
};
