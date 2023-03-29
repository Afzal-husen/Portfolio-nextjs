import Image from "next/image"

const Details = () => {
  return (
    <>
      <h1>Here's What I Do</h1>
      <Image
      src="/images/Hand.png"
      width={500}
      height={500}
      quality={100}
      />
      <h2>Full Stack Development</h2>
    </>
  )
}

export default Details