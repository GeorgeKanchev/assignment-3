import { Container } from "../../layout/Container";
import { Content } from "../../layout/Content";
import { HomeCalloutButton } from "./HomeCalloutButton";
import "./styles.css";

/**
 * Component is intentionally not broken down to child components since it's small and its child components
 * would not be reusable. The button is its own component since in a real application it'll have its own
 * (business) logic.
 *
 * Styles are in the same file to avoid fragmentation and they'll likely be changed/looked at together.
 */

export const HomeCallout = () => {
  return (
    <Container className="home-callout__wrapper">
      <Content>
        <div id="home-callout__content">
          <h2 className="home-callout__heading">New Games & Accessories</h2>
          <h1 className="home-callout__title">
            Monthly packages.
            <br />
            Excitement delivered daily.
          </h1>
          <p className="home-callout__p">
            What&rsquo;s the best way to shop for the latest video games and
            peripherals? How about never shopping at all? You&rsquo;ll get new
            stuff on your doorstep — every month.
          </p>
          <HomeCalloutButton />
        </div>
      </Content>
    </Container>
  );
};
