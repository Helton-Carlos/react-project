
const MyButton = ({ onClick, text }) => {
  return (
    <button className="bg-primary text-white py-2 px-6 rounded-xl hover:bg-purple" onClick={ onClick }>
      {text}
    </button>
  );
};

export default MyButton;