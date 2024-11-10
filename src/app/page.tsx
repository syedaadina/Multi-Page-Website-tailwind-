
import Link from "next/link";
function Home(){
  return(
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto overflow-hidden m-0"
    style={{backgroundImage:"url('/pic.jpg')"}}>
      <main>
        <div className="font-serif font-extrabold text-6xl text-pink-950 w-5 md:w-[450px] ">
          <h2 className="mt-52 ml-4">Unleash your beauty<br />at our Salon </h2>
        </div>
        <div>
          <button className="bg-pink-950 text-pink-50 h-11 ml-10 w-32  mt-12 font-extrabold font-serif rounded-[10px] hover:bg-yellow-900 md:ml-64"> <Link href="/contact">Contact Us</Link></button>
        </div>
      </main>
      </div>
  )
}
export default Home;