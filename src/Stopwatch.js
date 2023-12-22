import './style.css';
import Button from './Button.js';
import {useState, useRef} from 'react';
import Screen from './Screen.js';
import ChronoList from './ChronoList.js';

export default function Cronometro () {
    //const [screen, setScreen] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [startTime, setStartTime] = useState(Date.now());
    const [now, setNow] = useState(Date.now());
    const [chronoList, setChronoList] = useState(new Array());
    const intervalRef = useRef(null);

    function handleInterval(){
        setNow(Date.now());
        //setScreen()
    }

    function start_pause_loop(){
        setStartTime(startTime +Date.now()-now);
        setNow(Date.now());
        
        //clearInterval(intervalRef.current);
        //intervalRef.current = setInterval(()=> {setNow(Date.now());},10);

        if (!isRunning){
            intervalRef.current = setInterval(handleInterval,10);
            setIsRunning(true);
            //console.log(`initialDate: ${initialDate}, \nnow: ${now}, \nDate.now(): ${Date.now()} \nDate.now()-now: ${Date.now()-now}, \n setInitialDate: initialDate +(Date.now()-now):${initialDate +(Date.now()-now)} \n (Date.now()-initialDate): ${(Date.now()-initialDate)} \n(Date.now()-initialDate)/1000: ${(Date.now()-initialDate)/1000}`);
        } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setChronoList([...chronoList,(now-startTime) /1000]);
            //setNow(Date.now());
        }
        //setInitialDate(Date.now());
    }

    function stop_loop() {
        
        if(isRunning) {
            
            setIsRunning(false);
            setChronoList([...chronoList,(now-startTime) /1000]);
        }
            clearInterval(intervalRef.current);
            //setScreen(0);
            setStartTime(Date.now());
            setNow(Date.now());
            

       /*setIsRunning(false);
       setChronoList([...chronoList,(now-startTime) /1000]);
       setScreen(0);
       setNow(null);*/
    }

function reset(){
        if (isRunning){
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
        //setScreen(0);
        setStartTime(Date.now());
        setNow(Date.now());
        setChronoList(new Array());
        //setNow(Date.now());
    }

    let secondsPassed = 0;
    if(startTime != null && now != null) {
        secondsPassed = (now-startTime) /1000;
    }

    return (
        <div className="second-part">
            <div className="stopwatch">
                <div className="cover">
                    <Screen>{secondsPassed.toFixed(3)}</Screen>
                    <Button behavior={start_pause_loop}>{ !isRunning? "Start" : "Pause"}</Button>
                    <Button behavior={stop_loop}>Stop</Button>
                </div>
            </div>
            <ChronoList seconds={chronoList}/>
            <Button behavior={reset}>reset</Button>
        </div>
        
    );
}