'use client';

import { useState } from 'react';
import { ListItem, DropdownItem } from '@/components/ListItem';

function ListItemExample() {
  const [opened, setOpened] = useState(false);

  return (
    <ListItem
      label="Menu Item"
      chevron
      open={opened}
      onClick={() => setOpened(!opened)}
      icon={
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      }
    >
      <DropdownItem label="Sub-item 1" />
      <DropdownItem label="Sub-item 2" />
      <DropdownItem label="Sub-item 3" />
    </ListItem>
  );
}

function MultiselectExample() {
  const [items] = useState([
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleCheckedChange = (id: string, checked: boolean) => {
    const newChecked = new Set(checkedItems);
    if (checked) {
      newChecked.add(id);
    } else {
      newChecked.delete(id);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          label={item.label}
          selectMode="multiselect"
          checked={checkedItems.has(item.id)}
          onCheckedChange={(checked) => handleCheckedChange(item.id, checked)}
        />
      ))}
    </div>
  );
}

function SingleSelectExample() {
  const [items] = useState([
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ]);
  const [singleSelected, setSingleSelected] = useState<string>('');

  const handleSingleSelect = (id: string) => {
    setSingleSelected(id);
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          label={item.label}
          selectMode="single"
          name="dropdown-single-select"
          checked={singleSelected === item.id}
          onCheckedChange={() => handleSingleSelect(item.id)}
        />
      ))}
    </div>
  );
}

export default function ListItemsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        List Items
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-12">
        ListItem and DropdownItem components for navigation and dropdowns.
      </p>

      {/* Basic List Items */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Basic List Items
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Simple List Item
            </h3>
            <div className="flex flex-col gap-2 w-[240px]">
              <ListItem label="Menu Item" />
              <ListItem label="Menu Item" disabled />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Icon
            </h3>
            <div className="flex flex-col gap-2 w-[240px]">
              <ListItem
                label="Menu Item"
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              With Notification Badge
            </h3>
            <div className="flex flex-col gap-2 w-[240px]">
              <ListItem label="Menu Item" notification={5} />
              <ListItem label="Menu Item" notification={99} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Dropdown with Sub-items
            </h3>
            <ListItemExample />
          </div>
        </div>
      </section>

      {/* Select Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Select Variants
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Multiselect (Checkboxes)
            </h3>
            <MultiselectExample />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-4">
              Single Select (Radio)
            </h3>
            <SingleSelectExample />
          </div>
        </div>
      </section>
    </div>
  );
}

