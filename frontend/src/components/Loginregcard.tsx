const Loginregcard = ({ h1name, desc }: { h1name: any; desc: string }) => {
  return (
    <div >
      <div className="bg-white/15 backdrop-blur-sm flex flex-col justify-center items-center p-6 rounded-lg">
            <h1>{h1name}</h1>
            <p>{desc}</p>
          </div>
    </div>
  )
}

export default Loginregcard
