// ClientFeedbackForm.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Client Feedback Form
const ClientFeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    lawyerName: '',
    serviceQuality: '',
    communication: '',
    timeliness: '',
    wouldRecommend: '',
    comments: ''
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Client Feedback</CardTitle>
        <CardDescription>Help us improve our services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input 
            placeholder="Lawyer's Name"
            value={feedback.lawyerName}
            onChange={(e) => setFeedback({...feedback, lawyerName: e.target.value})}
          />
          <div className="space-y-2">
            <p className="text-sm font-medium">Service Quality</p>
            <select 
              className="w-full p-2 border rounded"
              value={feedback.serviceQuality}
              onChange={(e) => setFeedback({...feedback, serviceQuality: e.target.value})}
            >
              <option value="">Rate the service quality</option>
              <option value="5">Excellent</option>
              <option value="4">Very Good</option>
              <option value="3">Good</option>
              <option value="2">Fair</option>
              <option value="1">Poor</option>
            </select>
          </div>
          <Textarea 
            placeholder="Additional Comments"
            value={feedback.comments}
            onChange={(e) => setFeedback({...feedback, comments: e.target.value})}
          />
          <Button className="w-full">Submit Feedback</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientFeedbackForm;