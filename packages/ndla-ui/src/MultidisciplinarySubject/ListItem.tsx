import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';

const ItemWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const TextWrapper = styled.div`
  border: 1px solid #e6e6e6;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 16px 24px;
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color: ${colors.brand.primary};
  margin: 0 0 8px;
`;

const Introduction = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text.primary};
`;

const Subjects = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${colors.text.light};
  margin-top: 16px;
`;

const Subject = styled.span`
  display: block;
`;

export type ListItemProps = {
  title: string;
  introduction: string;
  url: string;
  image?: string;
  imageAlt?: string;
  subjects?: string[];
};

const ListItem = ({ title, introduction, url, image, imageAlt = '', subjects = [] }: ListItemProps) => (
  <ItemWrapper>
    <SafeLink to={url}>
      {image && <Image src={image} alt={imageAlt} />}
      <TextWrapper>
        <Title>{title}</Title>
        <Introduction>{introduction}</Introduction>
        {subjects.length && (
          <Subjects>
            {subjects.map((subject) => (
              <Subject key={subject}>{subject}</Subject>
            ))}
          </Subjects>
        )}
      </TextWrapper>
    </SafeLink>
  </ItemWrapper>
);

export default ListItem;
