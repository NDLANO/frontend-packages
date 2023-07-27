# ndla-dropdown-menu

Dropdown menu component based on @radix-ui/react-dropdown-menu

## Installation

```sh
yarn add --save @ndla/dropdown-menu
```

```sh
npm install @ndla/dropdown-menu --save
```

## Usage

Only DropdownContent is styled, and can be targeted as one usually does with emotion. The content arrow indicator can be styled by targeting `[data-arrow]`.

### Basic example

```js
import { DropdownMenu, DropdownTrigger, DropdownContent, DropdownItem } from '@ndla/dropdown-menu';

return (
  <DropdownMenu>
    <DropdownTrigger>
      <IconButtonV2 aria-label="Show more" title="Show more" variant="ghost" colorTheme="light">
        <HorizontalMenu />
      </IconButtonV2>
    </DropdownTrigger>
    <DropdownContent {...args}>
      <DropdownItem>
        <StyledButton variant="ghost" colorTheme="light" shape="sharp" size="small" fontWeight="normal">
          <Folder />
          Add item
        </StyledButton>
      </DropdownItem>
      <DropdownItem>
        <StyledButton variant="ghost" colorTheme="danger" shape="sharp" size="small" fontWeight="normal">
          <DeleteForever />
          Delete item
        </StyledButton>
      </DropdownItem>
    </DropdownContent>
  </DropdownMenu>
);
```
