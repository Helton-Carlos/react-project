import MyButton from "../MyButton/MyButton"

function CardComponent() {

  function addFuncion() {
    alert("hey")
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md mx-auto mt-10 lg:max-w-sm">
      <img
        className="object-cover w-full h-48"
        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
        alt="image"
      />
      <div className="p-4 text-primary">
        <h4 className="text-xl font-semibold tracking-tight">
          React Tailwind Card with Image
        </h4>
        <p className="mb-2 leading-normal">
          react tailwind css card with image It is a long established fact that
          a reader will be distracted by the readable content.
        </p>
        <MyButton text="See more" onClick={ addFuncion } />
      </div>
    </div>
  )
}
export default CardComponent
