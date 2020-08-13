import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from '../../components/Nav';

const donate = () => {
  return (
    <div>
      <Nav />
      <Container>
        <div className="container">
          <br />
          <h1>Donate</h1>
          <br />
          <p>these are pages you can get resources on environment/donate to causes that support this</p>
        </div>
        <style jsx>{`
          .container {
            text-align: center;
          }
        `}</style>
      </Container>
    </div>
  );
};

export default donate;