import '../CSS/menubar.css';
import {ReactComponent as Clean} from '../Icons/anchor.svg'
import {ReactComponent as Anchor} from '../Icons/anchor.svg'
import {ReactComponent as Key} from '../Icons/key.svg'
import {ReactComponent as Reset} from '../Icons/rotate-ccw.svg'
import {ReactComponent as Cp} from '../Icons/slack.svg'


export default function menubar(props){

    const handleClick = () => {
        //console.log(props.st);
        props.sf(true);
        props.sv(false);
    }

    const handleReset = () => {
        props.srf(true);
    }

    const handleClearPath = () => {
        props.scpf(true);
    }


    return(
        <nav class="main-nav">
             
               <ul>
                   <li>
                      Algorithms
                   </li>
                   <li>
                      Pre-sets
                   </li>
                   <li>
                      <button class='visualise' onClick={handleClick}>Visualise</button>
                   </li>
                </ul>

                

                <ul className='fuctions'>
                
                
                    {/* <a className='btn'><span className='icon'><Anchor/></span> <span class='text'>Add Weight Node</span></a> */}
                    {/* <a className='btn'><span className='icon'><Key/></span> <span class='text'>Add Key Node</span></a> */}
                    <a className='btn'><span className='icon'><Clean/></span> <span class='text'>Clear walls</span></a>
                    <a className='btn' onClick={handleClearPath}><span className='icon'><Cp/></span> <span class='text'>Clear Path</span></a>
                    <a className='btn' onClick={handleReset}><span className='icon'><Reset/></span> <span class='text'>Reset</span></a>
                </ul>


        </nav>
        
    );
};
