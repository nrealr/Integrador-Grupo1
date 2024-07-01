/**
 * Import React and external libraries
 */
import { useEffect, useState } from "react";
import { SERVER_API } from '../../../Constants';
import { 
  FeaturesCardContent, 
  FeaturesCardDescription, 
  FeaturesCardIcon, 
  FeaturesCardTitle, 
  FeaturesContainer, 
  FeaturesMainCard 
} from "./FeaturesCard.styled";
import axios from "axios";

/**
 * FeaturesCard component that displays a doctor's features
 * 
 * @param {number} doctorId - ID of the doctor to retrieve their features
 */
export const FeaturesCard = ({ doctorId }) => {
  /**
   * State to store the doctor's features
   */
  const [cards, setCards] = useState([]);

  /**
   * Effect to retrieve the doctor's features when the component mounts
   * or when the doctorId prop changes
   */
  useEffect(() => {
    /**
     * Make a GET request to the server API to retrieve the doctor's features
     */
    axios.get(`${SERVER_API}/doctors/${doctorId}/features`)
     .then(response => {
        const doctor = response.data;
        if (doctor.features) {
          /**
           * Process the response and update the cards state with the doctor's features
           */
          setCards(doctor.features.map(feature => ({
            id: feature.id,
            name: feature.name,
            icon: feature.icon && `data:image/jpg;base64,${feature.icon}`,
          })));
        }
      })
     .catch(error => {
        console.error(error);
      });
  }, [doctorId]);

  /**
   * Render the feature cards
   */
  return (
    <FeaturesContainer>
      {cards.map(card => (
        <FeaturesMainCard key={card.id}>
          <FeaturesCardContent>
            <FeaturesCardIcon src={card.icon} alt="Icon" />
            <FeaturesCardTitle variant="p" component="p">
              {card.name}
            </FeaturesCardTitle>
          </FeaturesCardContent>
        </FeaturesMainCard>
      ))}
    </FeaturesContainer>
  );
};