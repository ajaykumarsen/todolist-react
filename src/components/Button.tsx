export default function Button(props) {
  return (
    <button
      type="button"
      className={`mt-auto h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer
      ${props.buttonType === 'secondary' ? 'opacity-[85%]': ''}`}
    >
      {props.children}
      
    </button>
  );
}
