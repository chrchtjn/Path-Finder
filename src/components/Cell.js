import { useState , useEffect} from 'react'
import '../CSS/cell.css'
import {ReactComponent as Start} from '../Icons/start.svg'
import {ReactComponent as End} from '../Icons/end.svg'

export default function Cell(props){

    let sp = props.start[0];
    let ep = props.end[0];
    let position = props.pos;
    const[wall, setWall] = useState(false);
    const[cellType , setCellType] = useState(0);
    const isStart = (sp[0] === position[0]) && (sp[1] === position[1]);
    const isEnd = (ep[0] === position[0]) && (ep[1] === position[1]);
    let shiftStart = props.shifter[0];
    let shiftEnd = props.endShifter[0];
    
    const[path, setPath] = useState(false);
    const[ask, setAsk] = useState(false);

    const findIndex = (thisArray,theItem) => {
      for(let i = 0 ; i < thisArray.length ; i++){
        if(thisArray[i][0] === theItem[0] && thisArray[i][1] === theItem[1]){
          return i;
        }
      }
      return -1;
    }

      
     useEffect(()=>{
        //this triggers whenevr the shortest path algorithm finds a new short path
          setPath(false);                                 //to clear the previous path state
         setAsk(props.visit.has(position.toString()));    //to set the visited cells blue
            for(let i = 0 ; i < props.answer.length ; i++){
              if((props.answer[i][0]===position[0]) && ( props.answer[i][1] === position[1])){
                   setPath(true);              // if the cell position is in the answer then make it yellow
                }       
            } 
           
      },[props.answer, sp, ep]);
      


      useEffect(()=>{
        //triggers wehn we click reset button
        //to reset the path and wall and visited cells
         setAsk(false);      //visited blue
         setPath(false);     //path yellow
         setWall(false);     //wall black
      },[props.rf])

      useEffect(()=>{
        //triggers when we click clear path button
        //to reset the path and visited cells
         setAsk(false);      //visited blue
         setPath(false);     //path yellow
      },[props.rf])

    const handleDown = () =>{

      
       if(isStart){
           props.shifter[1](true);
       }  
       else if(isEnd){
          props.endShifter[1](true);
         
       }
     
      else{
        
        props.temp[1](!(props.temp[0]));
        if(!wall){
        props.wallArray[0].push(position);}
        else{
          let index = findIndex(props.wallArray[0], position);
          console.log(index);     
          if(index !== -1){ 
            props.wallArray[0].splice(index, 1);
            {console.log(props.wallArray[0])}
          }
        }
        setWall(!wall);
      }

        
      }
      
    

      const handleUp = () =>{

        if(shiftStart === true){
          if(props.pos[0]===ep[0] && props.pos[1]===ep[1]){
          }
          else{
          props.start[1](props.pos);
          if(props.virgin === false)
          props.sf(true);
          props.shifter[1](false);
        }
        }
        else if(shiftEnd === true){
          if(props.pos[0]===sp[0] && props.pos[1]===sp[1]){
          }
          else{
              props.end[1](props.pos);
              if(props.virgin === false)
              props.sf(true);
              props.endShifter[1](false);
              }
        }
        else
        { 
           props.temp[1](!(props.temp[0]));
        }
      }

      const handleOver = () =>{
        if(props.shifter[0]){
            props.start[1](props.pos);
            if(props.virgin === false)
            props.sf(true);

            // setWall(!wall);
        }
        else if(props.endShifter[0]){
            props.end[1](props.pos);
            if(props.virgin === false)
            props.sf(true);

            // setWall(false);
        }
        else if(props.temp[0]===true){
          if(!wall){
            props.wallArray[0].push(position);}
            else{
              let index = findIndex(props.wallArray[0], position);
              console.log(index);     
              if(index !== -1){ 
                props.wallArray[0].splice(index, 1);
                {console.log(props.wallArray[0])}
              }
            }
          setWall(!wall);

        }
      }
       
    if(isStart){
    return(
      <button class="cell" 
              onMouseDown={handleDown}  onMouseUp={handleUp} >
             
                 <Start/>
      </button>)
    }
    else if(isEnd){
      return(
        <button class="cell" 
                onMouseDown={handleDown} onMouseUp={handleUp} >
                <End/>
        </button>)
      }  
    else {
    return(
      <button class = { wall? "wall" : (path ? "path" :( ask ? "visited" : "cell"))} 
              onMouseDown={handleDown} onMouseOver={handleOver} onMouseUp={handleUp} >
               {/* {props.pos} */}
               <br></br>
      </button>)
    }  
    
}


