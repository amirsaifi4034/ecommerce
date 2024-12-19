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
        {/* <UserRound /> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
          <DialogDescription>
          Sign up with your mobile number to get started
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input defaultValue="" placeholder="Phone no." />
        </div>
        <Button type="button">Verify mobile number</Button>
        <div className=''>
            Already have an account? Sign in
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
