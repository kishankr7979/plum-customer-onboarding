import Head from 'next/head'
import Image from 'next/image'
import OnboardingFormOne from '../modules/layouts/components/OnboardingFormOne'
import StepperComponent from '../modules/stepper/components/StepperComponent'
import styled from 'styled-components';
import { useReducer } from 'react';
import ApplicationReducer, { applicationReducerInitialState, OnboardingDataTypes } from '../state/reducer';
import { UPDATE_STEP } from '../state/action';
import Card from '../lib/Card';
import FormPreview from '../modules/layouts/components/FormPreview';
import { Button } from '@mui/material';
export default function Home() {
  const [state, dispatch] = useReducer(ApplicationReducer, applicationReducerInitialState);

  const disabled = state?.plan.displayText === '' || state?.user?.email === '' || state?.user?.phone === '' || state?.user?.addressLineOne === '' || state?.user?.pinCode === '' || state?.user?.state === '';

  const onNextClick = () => {
    dispatch({type: UPDATE_STEP, payload: state?.step + 1});
  }
  return (
    <Parent>
      <Head>
        <title>Onboarding - Plum</title>
        <meta name="Plum onboarding" content="buy health insurance" />
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet' />
      </Head>
      <StepperComponent currentStep={state.step as number} totalSteps={4} />
      <Content>
        <div className='inner'>
          {state.step === 1 && <OnboardingFormOne name='Anisha' policyAmount={20} state={state as OnboardingDataTypes} dispatch={dispatch} />}
          <Card title='Form preview' content={<FormPreview user={state?.user} />} variant={2} />
        </div>
      </Content>
      <Footer disabled={disabled}>
        <Button title='Next' className='next-btn' disabled={disabled} onClick={onNextClick}>Next</Button>
      </Footer>
    </Parent>
  )
}


const Parent = styled.div`
  position: relative;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   margin-top: 3rem;

`;
const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  .inner {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    height: 100%;
    flex-wrap: nowrap;
`;

const Footer = styled.div<{disabled: boolean}>`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 95px;
    background: #ffffff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1.5rem;
    .next-btn {
      display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    gap: 8px;
      color: #ffffff;
    width: 320px;
    height: 47px;

    /* Primary/500

    Main switch - Single source of truth
    */
    background: ${(props) => props.disabled ? 'grey' : '#E06358'};
    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    }
`;