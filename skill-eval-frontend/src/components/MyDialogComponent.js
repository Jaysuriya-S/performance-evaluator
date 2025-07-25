import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const MyDialogComponent = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Open Dialog
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="bg-white rounded-lg shadow-lg p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md">
          
          {/* ✅ ADD THESE TWO: */}
          <Dialog.Title className="text-lg font-semibold text-green-700">
            Skill Evaluation
          </Dialog.Title>

          <Dialog.Description className="text-sm text-gray-500">
            Submit your technical skills to generate questions.
          </Dialog.Description>

          <div className="mt-4">
            <p>Welcome to the skill evaluator!</p>
          </div>

          <Dialog.Close asChild>
            <button className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MyDialogComponent;
