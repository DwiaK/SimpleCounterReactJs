// Home Page View
import { Button, Text, Card, CenterCard } from '../styles/GeneralStyles';

const HomePageView = ({ counter, incrementCounter, decrementCounter, resetCounter }) => (
    <div>
        <Card>
            <Text>
                {counter}
            </Text>
        </Card>

        <CenterCard>
            <Button onClick={incrementCounter}>
                Increment
            </Button>

            <Button onClick={decrementCounter}>
                Decrement
            </Button>

            <Button onClick={resetCounter}>
                Reset
            </Button>
        </CenterCard>
        
    </div>
);

export default HomePageView;