import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  left: -100px;
  top: -5px;
  border: 1px solid red;
  width: 100px;
  height: 100px;
`

const Text = styled.span`
  display: inline-block;
  padding-bottom: 10px;
`

const LeftCursor = styled.div`
  height: 100px;
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='63' height='35' viewBox='0 0 63 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.49777 0.952802L5.45057 0.455035L4.45503 0.54943L4.50223 1.0472L5.49777 0.952802ZM58.309 30.7178L53.4667 27.5737L53.165 33.3394L58.309 30.7178ZM5 1C4.50223 1.0472 4.50225 1.04742 4.50228 1.04771C4.5023 1.04788 4.50233 1.04823 4.50237 1.04858C4.50243 1.04929 4.50252 1.05024 4.50264 1.05143C4.50287 1.05381 4.5032 1.05716 4.50363 1.06146C4.5045 1.07007 4.50576 1.0825 4.50747 1.09865C4.51088 1.13095 4.51605 1.17814 4.52323 1.23943C4.53759 1.36203 4.55999 1.54108 4.59252 1.77032C4.65756 2.22875 4.76312 2.88825 4.92576 3.69856C5.25089 5.31835 5.80505 7.54533 6.72206 9.97574C8.55195 14.8256 11.8512 20.5486 17.7234 23.8222L18.2103 22.9488C12.6331 19.8396 9.44886 14.37 7.65768 9.62272C6.76416 7.2546 6.22339 5.08196 5.90621 3.50177C5.7477 2.71209 5.64527 2.07151 5.5826 1.62985C5.55128 1.40905 5.5299 1.23806 5.51644 1.12312C5.50971 1.06565 5.50496 1.0222 5.50193 0.993554C5.50042 0.979231 5.49934 0.968607 5.49865 0.961783C5.49831 0.95837 5.49807 0.955908 5.49792 0.954407C5.49785 0.953656 5.4978 0.953146 5.49777 0.952878C5.49776 0.952744 5.49776 0.952726 5.49775 0.952658C5.49776 0.9527 5.49777 0.952802 5 1ZM17.7234 23.8222C22.1331 26.2805 29.0277 27.9266 35.84 29.0295C42.6705 30.1353 49.4869 30.7048 53.7831 30.9816L53.8474 29.9837C49.5669 29.7079 42.7859 29.1409 35.9998 28.0423C29.1956 26.9408 22.4543 25.3146 18.2103 22.9488L17.7234 23.8222Z' fill='%23757575'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: top center;
  color: #757575;
`

export default () => {
  return (
    <Wrapper>
      <Text>Tips</Text>
      <LeftCursor />
    </Wrapper>
  );
}
