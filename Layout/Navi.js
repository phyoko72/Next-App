import Footer from "../comps/Footer";
import Header from "../comps/Header";

function Navi(props) {
  // console.log('what is props: ',props);

    return ( <>
            <Header/>
                {props.children}
            <Footer/>
    </> );
}

export default Navi;