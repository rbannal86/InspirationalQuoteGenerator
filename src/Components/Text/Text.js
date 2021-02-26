import faker from 'faker';
import './Text.css';

export default function Text({ width, text }) {
  if (text)
    return (
      <div
        className={'text_main'}
        style={{
          position: 'absolute',
          bottom: 60,
          width: width * 0.8,
          paddingLeft: '3%',
          marginBottom: '5%',
          zIndex: '6',
        }}
      >
        <p className={'text-quote'}>"{text}"</p>
        <span className={'text-attribution'}>
          -{faker.name.jobTitle()} {faker.name.findName()}
        </span>
      </div>
    );
  else return <></>;
}
