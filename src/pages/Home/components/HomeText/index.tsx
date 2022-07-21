export interface HomeTextProps {
  welcomeText: string;
}

export const HomeText: React.FC<HomeTextProps> = ({ welcomeText }) => {
  return <h1>{welcomeText}</h1>;
};
