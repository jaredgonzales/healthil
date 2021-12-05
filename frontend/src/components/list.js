export function LinkList(props) {
    const baseURL = props.baseURL;
    const items = props.items;
    const listItems = items.map((text) =>
      <li><a href={`${baseURL}?application=${text}`}>{text}</a></li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

export default LinkList;