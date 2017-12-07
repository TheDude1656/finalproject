import React,{Component} from 'react';
import '../../App.css';
// import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron/Jumbotron";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


class App extends Component {
  
        render(){
            var docDefinition = { content: 'This is an sample PDF printed with pdfMake' };
         
         
            return (
            <div>
               {pdfMake.createPdf(docDefinition)}
            </div>
                
          
            );
        };
    };
        

export default App;
