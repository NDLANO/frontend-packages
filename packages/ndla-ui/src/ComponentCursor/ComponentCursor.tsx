import { MutableRefObject, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useComponentSize } from '@ndla/hooks';
import { breakpoints, mq } from '@ndla/core';

type CursorStyleProps = {
  variant: string;
  adjustedWidth?: number | null;
};

const Wrapper = styled.div<CursorStyleProps>`
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
  position: absolute;
  top: -5px;
  max-width: 155px;
  flex-direction: column;
  display: none;
  visibility: hidden;
  ${mq.range({ from: breakpoints.wide })} {
    display: flex;
  }
  ${(props) =>
    props.adjustedWidth &&
    props.variant === 'left' &&
    css`
      min-width: 85px;
      left: -${props.adjustedWidth < 85 ? 90 : props.adjustedWidth}px;
      width: ${props.adjustedWidth < 85 ? 90 : props.adjustedWidth}px;
      align-self: flex-start;
      visibility: visible;
    `}
  ${(props) =>
    props.adjustedWidth &&
    props.variant !== 'left' &&
    css`
      min-width: 65px;
      right: -${props.adjustedWidth < 65 ? 70 : props.adjustedWidth}px;
      width: ${props.adjustedWidth < 65 ? 70 : props.adjustedWidth}px;
      left: auto;
      text-align: right;
      span {
        align-self: center;
      }
      visibility: visible;
    `}
`;

const Text = styled.span<CursorStyleProps>`
  display: inline-block;
  padding-bottom: 10px;
  font-family: 'Shadows Into Light Two', cursive;
  min-width: 85px;
  ${(props) =>
    props.variant !== 'left' &&
    css`
      min-width: 65px;
      text-align: center;
    `}
`;

const Cursor = styled.div`
  height: 65px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 25% 0%;
  color: #757575;
`;

const LeftCursor = styled(Cursor)`
  background-image: url("data:image/svg+xml,%3Csvg width='63' height='35' viewBox='0 0 63 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.49777 0.952802L5.45057 0.455035L4.45503 0.54943L4.50223 1.0472L5.49777 0.952802ZM58.309 30.7178L53.4667 27.5737L53.165 33.3394L58.309 30.7178ZM5 1C4.50223 1.0472 4.50225 1.04742 4.50228 1.04771C4.5023 1.04788 4.50233 1.04823 4.50237 1.04858C4.50243 1.04929 4.50252 1.05024 4.50264 1.05143C4.50287 1.05381 4.5032 1.05716 4.50363 1.06146C4.5045 1.07007 4.50576 1.0825 4.50747 1.09865C4.51088 1.13095 4.51605 1.17814 4.52323 1.23943C4.53759 1.36203 4.55999 1.54108 4.59252 1.77032C4.65756 2.22875 4.76312 2.88825 4.92576 3.69856C5.25089 5.31835 5.80505 7.54533 6.72206 9.97574C8.55195 14.8256 11.8512 20.5486 17.7234 23.8222L18.2103 22.9488C12.6331 19.8396 9.44886 14.37 7.65768 9.62272C6.76416 7.2546 6.22339 5.08196 5.90621 3.50177C5.7477 2.71209 5.64527 2.07151 5.5826 1.62985C5.55128 1.40905 5.5299 1.23806 5.51644 1.12312C5.50971 1.06565 5.50496 1.0222 5.50193 0.993554C5.50042 0.979231 5.49934 0.968607 5.49865 0.961783C5.49831 0.95837 5.49807 0.955908 5.49792 0.954407C5.49785 0.953656 5.4978 0.953146 5.49777 0.952878C5.49776 0.952744 5.49776 0.952726 5.49775 0.952658C5.49776 0.9527 5.49777 0.952802 5 1ZM17.7234 23.8222C22.1331 26.2805 29.0277 27.9266 35.84 29.0295C42.6705 30.1353 49.4869 30.7048 53.7831 30.9816L53.8474 29.9837C49.5669 29.7079 42.7859 29.1409 35.9998 28.0423C29.1956 26.9408 22.4543 25.3146 18.2103 22.9488L17.7234 23.8222Z' fill='%23757575'/%3E%3C/svg%3E%0A");
`;

const RightCursor = styled(Cursor)`
  background-image: url("data:image/svg+xml,%3Csvg width='25' height='30' viewBox='0 0 25 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.5225 0.85154L23.671 0.374089L24.6259 0.671009L24.4775 1.14846L23.5225 0.85154ZM1.43051e-06 29L3.58849 24.4772L5.71114 29.8463L1.43051e-06 29ZM24 1C24.4775 1.14846 24.4774 1.14858 24.4774 1.14874C24.4773 1.14886 24.4773 1.14908 24.4772 1.14932C24.477 1.14981 24.4768 1.15049 24.4765 1.15137C24.476 1.15312 24.4752 1.15567 24.4742 1.15899C24.4721 1.16562 24.469 1.17536 24.465 1.18813C24.4569 1.21366 24.445 1.25131 24.4292 1.30048C24.3976 1.3988 24.3507 1.5432 24.2889 1.72889C24.1654 2.10025 23.9825 2.63687 23.7441 3.30043C23.2675 4.6272 22.5684 6.46326 21.6782 8.5015C19.9041 12.5638 17.3477 17.4839 14.2498 20.7562L13.5236 20.0687C16.4968 16.9281 18.9971 12.1419 20.7618 8.10127C21.6411 6.08801 22.332 4.27338 22.803 2.96234C23.0384 2.30699 23.2187 1.77791 23.34 1.41331C23.4006 1.23101 23.4465 1.08987 23.4771 0.994638C23.4924 0.947025 23.5039 0.910896 23.5115 0.886846C23.5153 0.874821 23.5181 0.865817 23.5199 0.859908C23.5209 0.856953 23.5215 0.854772 23.522 0.853374C23.5222 0.852675 23.5224 0.852172 23.5224 0.851866C23.5225 0.851713 23.5225 0.851631 23.5225 0.851555C23.5226 0.851522 23.5225 0.85154 24 1ZM14.2498 20.7562C10.9759 24.2144 7.20988 26.4552 4.40024 27.7968L3.96934 26.8944C6.70901 25.5862 10.3604 23.4099 13.5236 20.0687L14.2498 20.7562Z' fill='%23757575'/%3E%3C/svg%3E%0A");
`;

type Props = {
  variant: string;
  text?: string;
};

const ComponentCursor = ({ variant = 'left', text = '' }: Props) => {
  const [componentSize, setComponentSize] = useState(null);
  const textRef = useRef(null) as unknown as MutableRefObject<HTMLSpanElement>;
  const size: any = useComponentSize(textRef);
  if (!componentSize && textRef && textRef.current) {
    setComponentSize(size.width + 5);
  }
  return (
    <Wrapper variant={variant} adjustedWidth={componentSize}>
      <Text variant={variant} ref={textRef}>
        {text}
      </Text>
      {variant === 'left' ? <LeftCursor /> : <RightCursor />}
    </Wrapper>
  );
};

export default ComponentCursor;
