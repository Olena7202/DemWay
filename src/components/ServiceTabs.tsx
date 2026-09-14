import { serviceGroups, type ServiceGroup } from '../data/services'

type ServiceTabsProps = {
  group: ServiceGroup
  onChange: (group: ServiceGroup) => void
}

export function ServiceTabs({ group, onChange }: ServiceTabsProps) {
  return (
    <div className="service-tabs" role="tablist" aria-label="Напрями послуг">
      {serviceGroups.map((item) => (
        <button
          key={item}
          type="button"
          role="tab"
          aria-selected={group === item}
          className={`service-tab${group === item ? ' service-tab--active' : ''}`}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
