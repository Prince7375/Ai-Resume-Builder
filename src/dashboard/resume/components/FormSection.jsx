import React from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowRight, LayoutGrid } from 'lucide-react'

function FormSection() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant='outline' size='sm' 
        className='flex gap-2'> <LayoutGrid /> Theme</Button>
        <div>
          <Button className='flex gap-2'> Next <ArrowRight /></Button>
        </div>
      </div>

      {/* personal detail */}
        <PersonalDetail />
      {/* Summery */}

      {/* Experience */}

      {/* educational details */}

      {/* Skills */}
    </div>
  )
}

export default FormSection