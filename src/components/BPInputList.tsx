import React, {FC, ChangeEvent, useState, useEffect} from 'react';
import Measure from './partials//Measure';
import {BP} from './partials/Interfaces';
import { postUserBP, fetchUser } from '../services/fetchingData';
import {MeasureContainerStyled, MeasureInputContainerStyled, MeasureInputStyled, MeasureBtnStyled, MeasureListStyled, SingleInputContainerStyled} from './styles/MeasurmentStyled'

interface IdProps {
    //setCurrentUserId: (value: number) => void
    currentUserId: (string | null)
}

const BPInputList: FC<IdProps> = ({currentUserId}) => {
    const [date, setDate] = useState<string>('');
    const [dyastolic, setDyastolic] = useState<number>(0);
    const [systolic, setSystolic] = useState<number>(0);
    const [heartRate, setHeartRate] = useState<number>(0);
    const [bPList, setbPList] = useState<BP[]>([]);

    useEffect(() => {
        fetchUser(currentUserId).then((data) => {
            if (data.bPList === undefined) {
                setbPList([])
            } else {
                setbPList(data.bPList)
            }})
    },[currentUserId])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "date") {
            setDate(String(event.target.value))
        } else if (event.target.name === "dyastolic") {
            setDyastolic(Number(event.target.value))
        } else if (event.target.name === "systolic") {
            setSystolic(Number(event.target.value))
        } else if (event.target.name === "heart-rate") {
            setHeartRate(Number(event.target.value))
        }
    };
    
      const addMeasure = (): void => {
        const newMeasure = {date: date, systolic: systolic, dyastolic: dyastolic, heartRate: heartRate};
        setbPList([...bPList, newMeasure]);
        setDate('');
        setDyastolic(0);
        setSystolic(0);
        setHeartRate(0);
        setTimeout((any)=>{postUserBP(bPList, window.localStorage.getItem("userId"))},1000)
        //postUserBP(bPList, window.localStorage.getItem("userId"))
      };
    
      const deleteMeasure = (measureDateToDelete: string): void => {
        setbPList(bPList.filter((measure) => {
          return measure.date !== measureDateToDelete
        }))
      };

      const saveInputs = () => {
        postUserBP(bPList, window.localStorage.getItem("userId"))
      }
    
      return (
        <MeasureContainerStyled>          
            <MeasureInputContainerStyled>
              <SingleInputContainerStyled>
              <h4>DATE:</h4>
              <MeasureInputStyled type="string" placeholder="date" name="date" value={date} onChange={handleChange}/>
              </SingleInputContainerStyled>
              <SingleInputContainerStyled>
              <h4>SYSTOLIC:</h4>
              <MeasureInputStyled type="number" placeholder="systolic" name="systolic" value={systolic} onChange={handleChange}/>
              </SingleInputContainerStyled>
              <SingleInputContainerStyled>
              <h4>DIASTOLIC:</h4>
              <MeasureInputStyled type="number" placeholder="dyastolic" name="dyastolic" value={dyastolic} onChange={handleChange}/>
              </SingleInputContainerStyled>
              <SingleInputContainerStyled>
              <h4>BPM:</h4>
              <MeasureInputStyled type="number" placeholder="heart rate" name="heart-rate" value={heartRate} onChange={handleChange}/>
              </SingleInputContainerStyled>

              <MeasureBtnStyled onClick={addMeasure}>Add Measure</MeasureBtnStyled>
              <MeasureBtnStyled onClick={saveInputs}>Save Changes</MeasureBtnStyled>
            </MeasureInputContainerStyled>            
          
          <MeasureListStyled>
            {bPList.map((measure: BP, key: number) => {
              return <Measure key={key} measure={measure} deleteMeasure={deleteMeasure} />
            }) }        
          </MeasureListStyled>
        </MeasureContainerStyled>
        
      );
    }

export default BPInputList;