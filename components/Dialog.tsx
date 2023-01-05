import * as DialogPrimitive from '@radix-ui/react-dialog';

import { CSS, styled } from 'stitches.config';

import { Cross1Icon } from '@radix-ui/react-icons';
import { IconButton } from 'components/primitive/IconButton';
import React from 'react';
import { overlayStyles } from 'components/primitive/Overlay';
import { panelStyles } from 'components/primitive/Panel';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,

  willChange: 'transform',

  '&:focus': {
    outline: 'none',
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});

type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS };

const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      <StyledCloseButton asChild>
        <IconButton variant="ghost">
          <Cross1Icon />
        </IconButton>
      </StyledCloseButton>
    </StyledContent>
  </DialogPrimitive.Portal>
));

const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
};
