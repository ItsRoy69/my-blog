import { Box } from "@material-ui/core";

//components
import Banner from './Banner';
import Categories from './Categories';
import Posts from './Posts';


function Home() {
  return (
    <>
        <Banner />
        <Box style={{display: 'flex'}}>
          <Categories />
          <Posts />
        </Box>
    </>
  )
}

export default Home;
