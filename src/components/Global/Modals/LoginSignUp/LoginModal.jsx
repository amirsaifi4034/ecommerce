import React from 'react';
import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

import {UserRound} from 'lucide-react';

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <UserRound />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your phone number
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input defaultValue="" placeholder="Phone no." />
        </div>
        <Button type="button">Request OTP</Button>
        <div className=''>
           New user? Create an account
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
