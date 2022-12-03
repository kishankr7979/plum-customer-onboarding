import Head from 'next/head'
import { ReactElement, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { LinearProgress } from '@mui/material';
const OnboardingFormOne = dynamic(() => import('../modules/layouts/components/OnboardingFormOne'), {
  suspense: true,
});
const OnboardingFormTwo = dynamic(() => import('../modules/layouts/components/OnboardingFormTwo'), {
  suspense: true,
})
const StepperComponent = dynamic(() => import('../modules/stepper/components/StepperComponent'), {
  suspense: true,
});
const Declaration = dynamic(() => import('../modules/layouts/components/Declaration'), {
  suspense: true,
});
import styled from 'styled-components';
import { useReducer, useRef } from 'react';
import ApplicationReducer, { applicationReducerInitialState } from '../state/reducer';
import { UPDATE_STEP } from '../state/action';
import Card from '../lib/Card';
import FormPreview from '../modules/layouts/components/FormPreview';
import { Button } from '@mui/material';
import ApplicationContext, { ContextState } from '../state/ApplicationContext';
import BackButton from '../lib/BackButton';
import Review from '../modules/layouts/components/Review';
export default function Home() {
  const formRef = useRef<any>();
  const [state, dispatch] = useReducer(ApplicationReducer, applicationReducerInitialState);
  const contextValue = {
    data: state,
    dispatch: dispatch
  }
  const onNextClick = () => {
    dispatch({ type: UPDATE_STEP, payload: state?.step + 1 });
  }
  const onBackClick = () => {
    dispatch({ type: UPDATE_STEP, payload: state?.step - 1 });
  }
  let disabled = state?.plan.displayText === '' || state?.user?.email === '' || state?.user?.phone === '' || state?.user?.addressLineOne === '' || state?.user?.pinCode === '' || state?.user?.state === '';
  if (state?.step === 2) disabled = !state?.deductibleUndertaking;
  if (state?.step === 3) {
    disabled = !state?.declaration.declarationFirst || !state?.declaration.declarationSecond || !state?.declaration.declarationThird || !state?.declaration.declarationFour
  }
  if (state?.step === 5) {
    console.log(state)
  }
  return (
    <Parent>
      <Suspense fallback={<LinearProgress />}>
        <ApplicationContext.Provider value={contextValue as ContextState}>
          <Head>
            <title>Onboarding - Plum</title>
            <meta name="Plum onboarding" content="buy health insurance" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          </Head>
          <StepperComponent currentStep={state?.step as number} totalSteps={4} />
          <Content>
            <div className='inner'>
              {state?.step === 1 && <OnboardingFormOne name='Anisha' policyAmount={20} />}
              {state?.step === 2 && <OnboardingFormTwo name='Anisha' policyAmount={2000000}
                onBackClick={onBackClick}
              />}
              {state?.step === 3 && <Declaration onBackClick={onBackClick} />}
              {[1, 2, 3].includes(state?.step) && <div className="preview">
                <Card title='Form preview' content={<FormPreview user={state?.user} />} variant={2} />
              </div>}
              {[4,5].includes(state?.step) && <Review onBackClick={onBackClick} />}
            </div>
          </Content>
          {state?.step < 5 && (
            <Footer disabled={disabled}>
              <Button title='Next' className='next-btn' disabled={disabled} onClick={onNextClick}>{state?.step === 4 ? 'Submit' : 'Next'}</Button>
            </Footer>
          )}
        </ApplicationContext.Provider>
      </Suspense>
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
  margin-bottom: 10rem;
  justify-content: center;
  .inner {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    height: 100%;
    .preview {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
    }
  }
`;

const Title = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;


    color: #182639;


`;
const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .header {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .title {
        display: flex;
        flex-direction: column;
        gap: 12px;
        
    }

`;
const Footer = styled.div<{ disabled: boolean }>`
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
    background: ${(props) => props.disabled ? 'grey' : '#E06358'};
    border-radius: 6px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    }
`;