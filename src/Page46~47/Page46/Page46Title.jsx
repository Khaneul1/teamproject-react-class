import React from 'react';
import NextButton from './NextButton';

const Plant = `${process.env.PUBLIC_URL}/plant.png`;
const SmallPlant = `${process.env.PUBLIC_URL}/A.png`;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  image: {
    width: '200px',
    height: '50px',
    marginBottom: '10px',
    marginLeft: '-50px',
  },
  smallImage: {
    position: 'absolute',
    top: '10px',
    right: '380px',
    width: '250px',
    height: '50px',
  },
  title: {
    fontSize: '25px',
    fontWeight: 'lighter',
  },
  nutrient: {
    color: 'red',
  },
};

const Page46Title = (props) => {
  return (
    <div style={styles.wrapper}>
      <img src={SmallPlant} style={styles.smallImage} alt="Small Plant" />

      <div style={styles.titleWrapper}>
        <img src={Plant} style={styles.image} alt="Plant" />
        <h1 style={styles.title}>
          앞서 기억해 둔 노인에게 결핍되기 쉬운{' '}
          <span style={styles.nutrient}>영양소</span>를 떠올리며 연결해
          <br />
          보세요.
        </h1>
      </div>
      <NextButton />
    </div>
  );
};

export default Page46Title;
