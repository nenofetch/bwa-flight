"use client";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function FormAirplane() {
  return <form className='w-[40%] ml-2 space-y-4'>
    <div className="space-y-2">
      <Label htmlFor='code'>
        Kode Pesawat
      </Label>
      <Input
        placeholder='Kode Pesawat'
        name='code'
        id='code'
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor='plane'>
        Nama Pesawat
      </Label>
      <Input
        placeholder='Nama Pesawat'
        name='plane'
        id='plane'
        required
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor='image'>
        Upload Gambar
      </Label>
      <Input
        name='image'
        id='image'
        type='file'
        required
      />
    </div>
    <Button className='w-full border'>Submit</Button>


  </form>
}
