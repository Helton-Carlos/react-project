function CardComponent() {
  return (
    <div className="w-full bg-primary rounded-lg shadow-md mx-auto mt-10 lg:max-w-sm">
      <img
        className="object-cover w-full h-48"
        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
        alt="image"
      />
      <div className="p-4 text-green">
        <h4 className="text-xl font-semibold tracking-tight">
          React Tailwind Card with Image
        </h4>
        <p className="mb-2 leading-normal">
          react tailwind css card with image It is a long established fact that
          a reader will be distracted by the readable content.
        </p>
        <button className="px-4 py-2 text-sm text-primary bg-green rounded shadow">
          Read more
        </button>
      </div>
    </div>
  )
}
export default CardComponent
