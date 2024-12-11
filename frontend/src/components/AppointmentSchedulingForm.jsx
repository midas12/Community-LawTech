// AppointmentSchedulingForm.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock } from 'lucide-react';

// Appointment Scheduling Form
const AppointmentSchedulingForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      serviceType: '',
      meetingType: '',
      language: '',
      additionalNotes: ''
    });
  
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Schedule an Appointment</CardTitle>
          <CardDescription>Book a meeting with one of our legal professionals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Input 
                placeholder="Full Name" 
                className="w-full" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input 
                placeholder="Email" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Input 
                placeholder="Phone Number" 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input 
                type="date" 
                value={formData.preferredDate}
                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
              />
              <Input 
                type="time"
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
              />
            </div>
            <select 
              className="w-full p-2 border rounded"
              value={formData.meetingType}
              onChange={(e) => setFormData({...formData, meetingType: e.target.value})}
            >
              <option value="">Select Meeting Type</option>
              <option value="in-person">In-Person</option>
              <option value="video">Video Call</option>
              <option value="phone">Phone Call</option>
            </select>
            <select 
              className="w-full p-2 border rounded"
              value={formData.language}
              onChange={(e) => setFormData({...formData, language: e.target.value})}
            >
              <option value="">Preferred Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="arabic">Arabic</option>
              <option value="mandarin">Mandarin</option>
            </select>
            <Textarea 
              placeholder="Additional Notes"
              value={formData.additionalNotes}
              onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
            />
            <Button className="w-full">Schedule Appointment</Button>
          </div>
        </CardContent>
      </Card>
    );
  };

export default AppointmentSchedulingForm;