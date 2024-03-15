// YOU CAN PROVIDE DEFAULT VALUES OF PROPS FROM HERE ONLY!
function Card({
  cardName = "Taylor",
  bio = "Bagger",
  btnText = "Visit Me",
  imgsrc = "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={imgsrc}
        alt="Unsplash Pic"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{cardName}</h1>
        <p className="mt-2 text-sm text-gray-300">{bio}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
