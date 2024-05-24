import styled from "styled-components";
import { Col, Row } from "./StyledDefaults";

import { ReactComponent as BloodSVG } from "../assets/svg/blood.svg";
import { ReactComponent as MoneySVG } from "../assets/svg/money.svg";
import { ReactComponent as PeopleSVG } from "../assets/svg/people.svg";
import { ReactComponent as PersonSVG } from "../assets/svg/person.svg";
import { ReactComponent as LuggageSVG } from "../assets/svg/luggage.svg";
import { ReactComponent as EvFrontSVG } from "../assets/svg/ev-front.svg";
import { ReactComponent as PigSVG } from "../assets/svg/pig.svg";
import { ReactComponent as EmojiGrimaceSVG } from "../assets/svg/emoji-grimace.svg";

export const CategoryWrapper = styled(Row)`
  justify-content: center;
  gap: 5rem;
  margin: 4.5rem 0;

  @media (min-width: 1024px) {
    margin: 2rem 0;
  }
`;

export const Name = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #000;
`;

export const Blood = styled(BloodSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  fill: red;
`;

export const Water = styled(BloodSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  fill: #438db2;
`;

export const Money = styled(MoneySVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
`;

export const People = styled(PeopleSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
`;

export const Person = styled(PersonSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
`;

export const Luggage = styled(LuggageSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
`;

export const Car = styled(EvFrontSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  fill: #000;
`;

export const Pig = styled(PigSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  fill: #000;
`;

export const Ghost = styled(EmojiGrimaceSVG)`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  fill: #000;
`;

export const svgComponents: {
  [key: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
} = {
  blood: Blood,
  water: Water,
  money: Money,
  people: People,
  person: Person,
  luggage: Luggage,
  car: Car,
  pig: Pig,
  ghost: Ghost,
};
