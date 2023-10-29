
// import { useRouter } from 'next/router';

// const HomePage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // router.replace('/onlinecourse/dashboard'); // Redirect to the custom home page
//     router.replace("/")
//   }, []);

//   return null;
// };

// export default HomePage;
import { useEffect, useState } from 'react'
import Preset from "../components/presets/preset"
import Navbar from "@/components/components/navbar/navbar"
import Banner from "../components/banner/banner"
import LocationServices from "@/components/services/test"
import allservice from '../services/allservice'
import Footer from '../components/footer/footer'
import HowToFill from '../components/howtofill/howtofill'
import Carousel from '../components/carousel/carousel'

export default function Home() {

  const [pageNo, setPageNo] = useState<any>()
  const [pageSize, setPageSize] = useState<number>()



  const getLocationList = async () => {


    var resp = await LocationServices.GetUser()
    console.log(resp);
  }

  const getGeneral = async () => {
    let api = "/invitations"
    var resp = await allservice.Get(api, 1, 20, "")
    console.log(resp.data && resp.data[0]);


  }




  useEffect(() => {
    // getlocations()
    getGeneral()
    // getLocationList()
  })
  return (
    <>
      <Navbar />
      <Banner />

      <div className='flex justify-center mt-20'>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-1  gap-10">


          <Preset />
          <Preset />
          <Preset />
          <Preset />
          <Preset />
          <Preset />
          <Preset />
          <Preset />
          <Preset />

        </div>




      </div>
      <Carousel />
      {/* <Pagination
        totalRecords={100}
        onPageChanged={(page: any) => {
          if (page.currentPage > 0) setPageNo(page.currentPage);
          setPageSize(25);
          // handlePageChange(page.currentPage);
        }}
        pageLimit={20}
        pageNeighbours={0}
      /> */}
      <Footer />

    </>

  )


}
