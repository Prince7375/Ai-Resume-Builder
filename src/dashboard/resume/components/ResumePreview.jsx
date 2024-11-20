import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

function ResumePreview() {

  const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor:resumeInfo?.themeColor
    }}>
        {/* Personal detail */}
          <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summary */}
          <SummeryPreview resumeInfo={resumeInfo} />
        {/* Professional Experience */}
          <ExperiencePreview resumeInfo={resumeInfo} />
        {/* Education */}
          <EducationalPreview resumeInfo={resumeInfo} />
        {/* Skilss */}
          <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  )
}

export default ResumePreview