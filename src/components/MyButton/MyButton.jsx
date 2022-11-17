
const MyButton = ({ onClick, text }) => {
  return (
    <button className="bg-primary text-white py-2 px-4 rounded-xl my-2 hover:bg-purple" onClick={ onClick }>
      {text}
    </button>
  );
};

export default MyButton;