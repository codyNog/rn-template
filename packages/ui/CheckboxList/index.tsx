"use client";
import { useCallback, useMemo } from "react";
import { type CheckedState, View, YStack } from "tamagui";
import { Checkbox } from "../Checkbox";

type Parent = {
  label: string;
  id: string;
};

type Check<T> = {
  id: T;
  label: string;
  checked: boolean;
};

/**
 * @param {Parent} parent Parent checkbox, if this value is provided, the parent checkbox will be rendered
 * @param {Check[]} checks List of checkboxes
 * @param {(checks: Check[]) => void} onChangeChecks Callback function to handle checkbox changes
 */
type Props<T> = {
  parent?: Parent;
  checks: Check<T>[];
  onChangeChecks: (checks: Check<T>[]) => void;
};

/**
 * @param {Props} props
 * @returns CheckboxList component
 */
export const CheckboxList = <T extends string>({
  parent,
  checks,
  onChangeChecks,
}: Props<T>) => {
  const onChangeChild = useCallback(
    (id: string) => {
      onChangeChecks(
        checks.map((check) => {
          if (check.id === id) return { ...check, checked: !check.checked };
          return check;
        }),
      );
    },
    [onChangeChecks, checks],
  );

  const checked: CheckedState = useMemo(() => {
    // when all checkboxes are checked, check the parent checkbox
    if (checks.every((check) => check.checked)) return true;
    // when some checkboxes are checked, make the parent checkbox indeterminate
    if (checks.some((check) => check.checked)) return "indeterminate";
    // when all checkboxes are unchecked, uncheck the parent checkbox
    return false;
  }, [checks]);

  const onChangeParent = useCallback(() => {
    // when some checkboxes are checked, uncheck all checkboxes
    if (checked) {
      onChangeChecks(checks.map((check) => ({ ...check, checked: false })));
      return;
    }
    // when all checkboxes are unchecked, check all checkboxes
    onChangeChecks(checks.map((check) => ({ ...check, checked: true })));
  }, [checked, checks, onChangeChecks]);

  return (
    <YStack>
      {parent && (
        <View>
          <Checkbox
            id={parent.id}
            label={parent.label}
            checked={checked}
            onCheckedChange={onChangeParent}
          />
        </View>
      )}
      <View>
        {checks.map((check) => (
          <Checkbox
            key={check.id}
            {...check}
            checked={check.checked}
            onCheckedChange={() => onChangeChild(check.id)}
          />
        ))}
      </View>
    </YStack>
  );
};
