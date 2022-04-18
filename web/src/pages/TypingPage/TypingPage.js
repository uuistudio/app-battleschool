const TypingPage = () => {
  return (
    <>
      <section className="w-full bg-gray-200 px-10 py-4">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-12 h-12 bg-pink-600">
            <p>Avatar</p>
          </div>
          <div className="flex flex-col text-center gap-4">
            <h1 className="text-6xl">Typing</h1>
            <h1 className="text-3xl">4:05</h1>
          </div>
          <div>
            <p>Rank 1</p>
          </div>
        </div>
      </section>
      <section className="w-full h-screen">
        <div className="w-full flex flex-col justify-center items-center space-y-8 h-1/2">
          <p className="text-5xl">Hello World</p>
          <input className="border-2 border-black w-96 h-32"></input>
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-blue-500 h-1/2">
          <h1>Ok</h1>
        </div>
      </section>
    </>
  )
}

export default TypingPage
