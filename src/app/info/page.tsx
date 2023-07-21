import Header from '@/components/global/Header'

import CodePractice from '@/components/info/CodePractice'
import HeroText from '@/components/info/HeroText'
// import Footer from '@/components/Footer'



export const metadata = {
  title: 'Info ▼ Super Manifold®',
};



export default function Info() {
    return (
      <div className={`animate-fade`}>

<Header hasBorder={false} />
     
      <HeroText copy="We craft electronic products for the future of work and play🅐" />

      <CodePractice 
          listName="Code of Practice"
          listItems ={[
          'Focus on doing good work, the rest will follow.', 
          'Play fair.', 
          'Go slow and think long term.',
          'People is everything. Find the really good people, and create a universe they want to be part of.',
          'Seek out kindness, most people are nice, far fewer are kind.',
          'Take pride in what we do and win the respect of those we admire.',
          'We are what we eat, and this applies equality to the information we consume. Therefore be very intentional with what we feed our minds.',
          'Be intellectually rigorous. Strive for both accuracy and precision in our signals.',
          'Share our ideas.',
          'Be someone who provides accurate long form answers to questions on the internet.',
          'Explain things in ways a child would understand.',
          'Critical thinking skills, or common sense, is far more valuable than any formal education or specific skill set.',
          'Steer clear of using acronyms, nobody knows what they mean and it only impresses the wrong people.',
          'Create work with a memorable story in a beautiful language.',
          'Create work we are proud to share with those we care about the most.',
          'We don’t know what we don’t know, therefore learn as much as possible about as much as we can.',
          'Don’t go to Silicon Valley, the time for that has long passed.',
          'Remember that in the end it’s all luck.',


      ]}
      />

      <HeroText copy="Super Manifold is based in Montreal, Canada🅐" fontSize='text-3xl'/>

      {/* <Footer colorConfig={{text: 'text-jet-stream', 

bg: 'bg-cinnabar', 
bg2: 'bg-jet-stream'}}/> */}
      </div>
    )
}






{/* <div className="h-16 bg-cinnabar"></div>  */}
{/*THIS IS PRETTY HACK!! Pushing down the page to compensate for fixed header*/}